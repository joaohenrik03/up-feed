import { useState } from 'react';

import { Avatar } from '../Avatar/Avatar';
import { Comments } from '../Comments/Comments';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css';

type PostProps = {
    author: {
        name: string;
        avatarUrl?: string;
        role: string;
    };
    publishedIn: Date;
    postContent: Array<{
        type: string;
        content: string;
    }>;
};

export function Post({ author, publishedIn, postContent}: PostProps) {
    const formattedPublicationDate = format(publishedIn, "d 'de' LLLL 'de' uuuu',' 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publicationDateRelativeToNow = formatDistanceToNow(publishedIn, {
        locale: ptBR,
        addSuffix: true,
    });

    const [comments, setComments ] = useState<string[]>([]);

    const [newCommentText, setNewCommentText] = useState<string>('');

    function handleCreateNewComment(event: { preventDefault: () => void; }) {
        event.preventDefault();

        setComments([...comments, newCommentText]);

        setNewCommentText('');
    };

    function deleteComment(commentToDelete: string) {
        const newCommentsList = comments.filter(comment => {
            return comment !== commentToDelete
        });

        setComments(newCommentsList);
    };

    const isDisabled = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.authorPost}>
                    <Avatar
                        src={author.avatarUrl}
                    />

                    <div className={styles.authorInformation}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                
                <time
                    dateTime={publishedIn.toISOString()}
                    title={formattedPublicationDate}
                >
                    {publicationDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {
                    postContent.map((textContent) => {
                        if (textContent.type === 'paragraph') {
                            return <p key={textContent.content}>{textContent.content}</p>
                        } else if ((textContent.type === 'link')) {
                            return <p key={textContent.content}><a target="_blank" href={textContent.content}>{textContent.content}</a></p>
                        }
                    })
                }
            </div>

            <form
                onSubmit={handleCreateNewComment}
                className={styles.form}
            >
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixe um comentário'
                    onChange={(e) => setNewCommentText(e.target.value)}                   
                    value={newCommentText}
                />

                <footer>
                    <button 
                        type='submit' 
                        disabled={isDisabled}
                    >
                        Publicar
                    </button>    
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map(comment => {
                        return (
                            <Comments 
                                content={comment} 
                                key={comment} 
                                onDeleteComment={deleteComment} 
                            />
                        )                 
                    })    
                }
            </div>
        </article>     
    )
}

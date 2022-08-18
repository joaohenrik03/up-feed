import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";

import styles from './Comments.module.css';

type CommentsProps = {
    content: string;
    onDeleteComment: (content: string) => void;
    userName: string;
    avatarUrl: string;
};

export function Comments({ content, onDeleteComment, userName, avatarUrl }: CommentsProps) {
    const commentPublishedIn = new Date();

    const publicationDateRelativeToNow = formatDistanceToNow(commentPublishedIn, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleDeleteComment() {
        onDeleteComment(content);
    };

    const [applauseCounter, setApplauseCounter] = useState<number>(0);

    function applaudComment() {
        setApplauseCounter(applauseCounter + 1);
    };

    return (
        <div className={styles.comment}>
           <Avatar 
                hasBorder={false} 
                src={avatarUrl}
            />

            <div className={styles.commentContainer}>
                <div className={styles.commentBox}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{userName}</strong>
                            <time dateTime='2022-07-21 15:46:12' title='21 de Julho de 20221, às 15:46h'>
                                {publicationDateRelativeToNow}
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>
                        {content}
                    </p>
                </div>

                <footer>
                    <button onClick={applaudComment}>
                        <ThumbsUp size={32} />
                        Aplaudir
                        <span>{applauseCounter}</span>
                    </button>
                </footer>
            </div> 
        </div>
    )
}

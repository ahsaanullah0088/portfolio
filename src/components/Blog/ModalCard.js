/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable import/no-dynamic-require */
import { useEffect, useState } from 'react';
import styles from './ModalCard.module.css';
import me from '../../assets/profile2.png';

// MD Components
import { Link, Code } from './Renderers/Renderers';

// Plugins
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';

function ModalCard({ data }) {
  const { id, title, date, banner, md, author, tags } = data;
  const [post, setPost] = useState('');

  const img = require(`./BlogData/${banner}`);

  useEffect(() => {
    import(`./BlogData/${md}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost(res));
      })
      .catch((err) => {});
  }, []);

  return (
    <div className={styles.modalContainer}>
      <h1>
        {id}. - {`${title}`}
      </h1>

      <div className={styles.tagsContainer}>
        <p>Tags →</p>

        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      <div className={styles.modalImg}>
        <img width="1000px" height="500px" src={img} alt="" />
      </div>

      <div className={styles.header}>
        <div className={styles.avatar}>
          <img src={me} alt="" />
          <p>• {author} •</p>
        </div>
        <span>Published on {date}</span>
      </div>

      <hr />

      <div className={styles.modalText}>
        <ReactMarkdown
          className={styles.mdContainer}
          remarkPlugins={[[remarkGfm]]}
          rehypePlugins={[rehypeSlug]}
          components={{
            code: ({ ...props }) => <Code {...props} />,
            a: ({ ...props }) => <Link {...props} />,
          }}
        >
          {post}
        </ReactMarkdown>

        {/* 
        <div className="contact mtop">
          <h1>Leave a Reply</h1>
          <form action="" className="blog_contact d_flex">
            <div className="left">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Website" />
              <button type="submit" className="btn_shadow">
                SUBMIT NOW
              </button>
            </div>
            <div className="right">
              <textarea cols="30" rows="20" placeholder="Comment" />
            </div>
          </form>
        </div> 
        */}
      </div>
    </div>
  );
}

export default ModalCard;

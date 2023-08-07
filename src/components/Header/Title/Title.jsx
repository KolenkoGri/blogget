import style from './Title.module.css';
import Layout from '../../Layout';

export const Title = (props) => {
  return (
    <Layout>
      <h1 className={style.heading}>{props.text}</h1>
    </Layout>
  )
}
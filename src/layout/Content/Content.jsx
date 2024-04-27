import "./Content.css";
import ContentTop from '../../components/ContentTop/ContentTop';
import ContentMain from '../../components/ContentMain/ContentMain';

const Content = () => {
  return (
    <div className='main-content bg-gray-100'>
      <ContentTop />
      <ContentMain />
    </div>
  )
}

export default Content

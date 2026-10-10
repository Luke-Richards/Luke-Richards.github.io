import '../App.css';





function HomepageItem(props) {

  let title = props.title || "title undefined"

  return (
    <div className='homepage-item'>
      <div className='homepage-item-title toc-entry'>
        {title}
      </div>
      <div className='homepage-item-background'>
      </div>
      <div className='homepage-item-content'>
        {props.children}
      </div>
    </div>
  );

}

export default HomepageItem;
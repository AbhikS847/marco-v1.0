import React from 'react';

const NotFound = () => {
  return (
    <div className="text-center" style={{padding:32, backgroundColor:'#f1af4e', color:'#fff'}}>
        <div className="display-1">404 error</div>
        <div className="notfound-subheading">
        <div>
        Sorry, the page you are looking for doesn't exist.
        </div>
        <div>
        Try a different link or simply click on the back button.
        </div>
        </div>
        <a className="btn btn-light my-3" style={{color:'#f1af4e', fontSize:24}} href="/">Go back</a>
        <div className="notfound-footer">
        PS: If you've had no problems with this page before, we might be under maintenance 
        </div>
    </div>
  )
}

export default NotFound
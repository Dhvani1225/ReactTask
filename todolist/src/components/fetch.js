import React from "react";
import useFetch from 'React-Fetch-Hook';
 const fetchComponent = () => {
     const {isLoading, data} = useFetch("http://dummy.restapiexample.com/api/v1/employees");
    
    ;
     if(isLoading)
     {
        return ( 
            <div><img src="https://cdn.dribbble.com/users/90627/screenshots/1096260/loading.gif"/></div>
        );
     }
     return (
         <div className="fetchComponent">{data.map(<div>{data.employee_name}</div>)}</div>
     );
 }
 export default fetchComponent

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UsersList from './UsersList';
    
    const RemoteUsers = () => {
      const [users, setUsers] = useState([]);
      const [page, setPage] = useState(0);
      const [isLoading, setIsLoading] = useState(false);
      const [errorMsg, setErrorMsg] = useState('');
    
    const loadUsers = async () => {
          try {
            setIsLoading(true);
            
            const response = await axios.get(
              `https://randomuser.me/api/?page=${page}&results=10`
            );
    
            setUsers([...users, ...response.data.results]);
            setErrorMsg('');
          } catch (error) {
            setErrorMsg('Error while loading data. Try again later.');
          } finally {
            setIsLoading(false);
          }
        };
    
      useEffect(() => {    
        loadUsers();
      },[page]);
    
      const loadMore = () => {    
        setPage((page) => page + 1);   
      };
    
      return (
        <div className="main-section">    
          <hr />
          <h4>Users from API</h4>
          <UsersList users={users} />      
          {errorMsg && <p className="errorMsg">{errorMsg}</p>}
          <div className="load-more">
            <button onClick={loadMore} className="btn btn-primary">
              {isLoading ? 'Loading...' : 'Load More'}
            </button>
          </div>
        </div>
      );
    };
    
    export default RemoteUsers;
    
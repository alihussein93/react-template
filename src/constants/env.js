const environment = () => {
  const DEV_API = 'http://localhost:8000/api';
  const INACTIVE_SESSION_TIME = '3600';

  return {
    endPoint: DEV_API,
    sessionTime: INACTIVE_SESSION_TIME
  };
};

export default environment;

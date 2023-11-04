import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <>
      <h1>Root</h1>
      <Outlet />
    </>
  );
};

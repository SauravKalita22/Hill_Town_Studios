import Navigation from './Components/Navigation';

export default function Layout({ children }){
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};
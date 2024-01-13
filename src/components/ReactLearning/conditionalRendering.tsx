const ConditionalRendering = () => {
  let isLoggedIn = true;
  let isLoggedIn2 = true;

  return (
    <div className="flex flex-col py-5 gap-2">
      {isLoggedIn ? <div>Admin Panel</div> : <div>Login Form</div>}
      {isLoggedIn2 && <div>I'm condition rendering</div>}
    </div>
  );
};
export default ConditionalRendering;
function App() {
  const userInfo = [
    {
      username: "well",
      email: "textwell@gmail.com",
      location: "ghana",
    },
    {
      username: "mine",
      email: "mine@gmail.com",
      location: "uk",
    },
    {
      username: "well",
      email: "wellwell@gmail.com",
      location: "America",
    },
  ];
  return (
    <>
      {userInfo.map((info) => (
        <ul key={Math.random() * 2}>
          <li>{info.username}</li>
          <li>{info.email}</li>
        </ul>
      ))}
    </>
  );
}

export default App;

function App() {

  const test = fetch('https://api.jikan.moe/v4/anime/43608')
.then(response => {
return response.json();
})
    .catch(error => {
 console.log(error);
});

  test.then((data) => {
      console.log(data);
    }
  );

  return (
    <p> start </p>
  );
}

export default App;

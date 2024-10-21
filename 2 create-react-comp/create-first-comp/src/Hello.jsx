function Hello() {
  let myName = "Arya";
  let fullName = () => {
    return "Arya Kumar";
  };
  return <h3>Hello this is future speaking , I am your {fullName()}</h3>;
}

export default Hello;

const loadUser = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => displyUser(data));
};
const displyUser = (user) => {
  const genderTag =document.getElementById('gender')
  genderTag.innerHTML = user.results[0].gender;

  const name = user.results[0].name.first + ' ' + user.results[0] .name.last;
  document.getElementById('name').innerHTML =name;
  console.log(user.results[0].name);
};
loadUser();

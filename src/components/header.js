const Header = (title, date, temp) => {

  const header = document.createElement('div');
  const date1 = document.createElement('span');
  const title1 = document.createElement('h1');
  const temp1 = document.createElement('span');

  header.classList.add('header');
  date1.classList.add('date');
  temp1.classList.add('temp');

  date1.textContent = date;
  title1.textContent = title;
  temp1.textContent = temp;

  header.appendChild(date1);
  header.appendChild(title1);
  header.appendChild(temp1);

  return header;

}
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //


const headerAppender = (selector) => {
  const obj = document.querySelector(selector).appendChild(Header());
  return obj;

  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!
}

export { Header, headerAppender }

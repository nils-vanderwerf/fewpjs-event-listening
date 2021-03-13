const input = document.getElementById('input');


function addingEventListener(event) {
    input.addEventListener('click', function(event) {
        alert('I was clicked!');
      });
}

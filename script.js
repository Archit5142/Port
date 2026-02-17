const bars = document.querySelectorAll('.bar');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.width = entry.target.dataset.width;
    }
  });
},{threshold:0.5});

bars.forEach(bar => observer.observe(bar));

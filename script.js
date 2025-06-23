function handleClick(name) {
  const clean = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  const page = clean + '.html';
  window.location.href = page;
}


function updateProgressBar(progressBar, value) {
  value = Math.round(value);
  progressBar.querySelector(".progress__fill").style.width = `${value}%`;
  progressBar.querySelector(".progress__text").textContent = `${value}%`;
}

const allProgressBars = document.querySelectorAll(".progress");
const values = [20, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

allProgressBars.forEach((bar, index) => {
  updateProgressBar(bar, values[index] || 0);
});

  function showTab(tabId) {
    const tabs = document.querySelectorAll(".tab-content");
    const buttons = document.querySelectorAll(".tab-btn");

    tabs.forEach(tab => {
      tab.style.display = (tab.id === tabId) ? "block" : "none";
    });

    buttons.forEach(btn => {
      btn.classList.remove("active");
    });

    const clickedButton = Array.from(buttons).find(btn =>
      btn.textContent.toLowerCase().includes(tabId)
    );
    if (clickedButton) clickedButton.classList.add("active");
  }



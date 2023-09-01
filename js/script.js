// const end=new Date("30 August 2023 12:00:00 AM").getTime();
const end=new Date().getTime();
const inputs = document.querySelectorAll("input");
function clocks() {
    const now = new Date("30 August 2024 12:00:00 AM").getTime();
    var distance = end - now;
    if (distance <= 0) {
        document.getElementById("show").style.display="block";
        document.getElementById("form").style.display="none";
    }
    inputs[0].value = Math.floor(distance / (1000 * 60 * 60 * 24));
    inputs[1].value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    inputs[2].value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    inputs[3].value = Math.floor((distance % (1000 * 60)) / 1000);
  
}
clocks();
setInterval(
    () => {
        clocks()
    },1000
)


// Target Element
const container = document.getElementById("container");

// Create Observer
const observer = new MutationObserver((mut) => {
  mut.forEach((mut) => {
    if (mut === "childList") {
      console.log("Dom Changed");
    }
  });
});

//Starting Observing
observer.observe(container, {
  childList: true,
});
let count = 0;
//Trigger
document.getElementById("btn").addEventListener("click", () => {
  console.log(`Trigger:${count}`);
  count++;
  if (count > 5) {
    console.log(observer.takeRecords());
    observer.disconnect();
  } else {
    const p = document.createElement("button");
    //   p.textContent = "Hello Demo Mutation!";
    p.type = "submit";
    p.value = "Mutate Down";
    p.name = "Mutate";
    container.appendChild(p);
  }
});

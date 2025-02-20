onmessage = function (event) {
  console.log("Message from Main Script:", event.data);

  const result = event.data + " - Processed by Worker";

  console.log(this);

  postMessage(result);
};

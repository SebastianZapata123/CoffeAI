import "./style.css";

document.querySelector("#app").innerHTML = `
   <div class="container">
      <div class="top-bar">
        <div class="account"></div>
      </div>
      <div class="chat">
        <div class="chat-label"></div>
      </div>
      <div class="input-bar">
        <input type="text" name="" id="" placeholder="Ask me" class="ask" />
        <button type="submit" class="btn-ask">
          <i class="fa-solid fa-play"></i>
        </button>
      </div>
    </div>
    <script type="module" src="./scripts/input.js"></script>

    <script src="./scripts/API.js" type="module"></script>
    <script src="./scripts/newMessage.js" type="module"></script>
`;

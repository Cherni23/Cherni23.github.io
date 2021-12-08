document.body.innerHTML=`
    <div class="ask_question">
        <div class="ask"><p>Задайте питання магічній кулі</p>
            <input type="text" id="question">
        </div>
    </div>
    <div class="magic_ball ">
        <div class="ball" onclick="answer()">
            <span id="text" class="text" ></span>
            <img src="Magic_ball.png" alt="Magic ball">
        </div>
    </div>`;
    
let answers = [
    "Так","Ні","Можливо","Відмовлюсь відповідати","Можливо так, але ні)","Шляпа ваш вопрос",
    "Швидше за все - ні","100% так"];

function answer(){
    if (question.value.length>0){
        let answer=answers[Math.floor(Math.random()*answers.length)];
        document.getElementById('text').innerHTML=answer;}
    else alert("Забувся написати питання");}

$(document).ready(function() {

    // DOM элементы, для чистоты кода
    const container = $('.container');
    const actions   = $('.wrapper_blocs');
    const steps     = $('.steps');
    const check     = $('#check');
    const levels    = $('#levels');
    const viewport  = container.find('.question');
    const score     = $('#score');

    // Для увеличевания значения элемента
    let attempts   = 0;
    let wrongAns   = 0;
    let successAns = 0;
    
    // получаю доступные уровни из "хранилища"
    const levelsList = store.levels;

    // перебираю полученные уровни и на основе их формирую кнопки для выбора уровня
    for(index in levelsList) {
        const level = levelsList[index];

        // Создаю кнопку определенного уровня
        levels.append('<button class="btn" id="'+level+'">'+level+'</button>')
        $(document).on('click','#'+level,function() {
            const words = store.words[level];

            // Собираю элементы с DOM для навешивания анимации
            let btn  = $(this);
            let text = btn.parent().prev();
            let btns = btn.parent().children().not(this);
            
            // Кидаю на них анимацию
            btns.addClass('slowDown_animate')
            btn.addClass('slowUp_animate'); 
            text.addClass('slowUp_animate');
            
            // Скрываю кнопки выбора уровней так как пользователь на этом этапа уже выбрал уровень
            setTimeout(function() {
                btns.hide();
                text.hide();
                actions.hide();
            },400);

            // Показываю блок с словом
            setTimeout(function() {
                container.fadeIn();
            },600);  

            // Создаю шаги уровня, (точки сверху)
            for(index in words) {
                steps.append('<div class="result-'+index+'"></div>')
            }

            // Вытягиваю первое слово из хранилища и помещаю его в блок с словом
            viewport.text(words[0].answer);

            // Сохраняю ключ выбранного уровня
            check.attr('data-level',level);
        });
    }

    // Кнопка для проверки введеного слова в текстовое поле
    $(document).on('click','#check',function() {

        // DOM элементы
        let item     = $('#input');
        let level    = $(this).data('level');

        // Беру слово из поля в котором пользователь ввел слово
        let question = item.val();

        // Вытаскиваю слова по ключу уровня из хранилища, нужны дальше для проверки правильности ввода слова
        const words  = store.words[level];

        // Формирую шаг 
        let step     = attempts+1;

        // Собираю сумму попыток (+1 нужно что бы уровновесить ключи для сравнения)
        let sum      = successAns+wrongAns+1;
    
        // Если количество шагов равна количеству попыток, я перестаю вешать инкремент на кнопку
        if(step === sum) {
            // Проверяю правильность ввода слова, если слово верное, ставлю инкремент "Верный ответ" и запускаю анимацию "Успех"
            // Если слово не верное, ставлю инкремент "Не верный ответ" и запускаю анимацию "Ошибка"
            if(words[attempts].question === question) {
                successAns++;
                steps.children(attempts)[attempts].classList = 'success';
                viewport.addClass('success');
              
            } else {
                wrongAns++;
                steps.children(attempts)[attempts].classList = 'error';
                viewport.addClass('error');
            }
        }
        
        // После запуска анимации, через секунду тут же ее сбрасываю, имитирую флешку
        setTimeout(function() {
            viewport.removeClass('error');
            viewport.removeClass('success');
        },1000);

        // Если количество шагов не превышает количество элементов в хранилище, значит мы еще проходим тест 
        // Если количество шагов превышает количество элементов в хранилище, значит мы закончили тест
        if(step < words.length) {
            attempts++;
            // Проверяю наличие элемента в хранилище (для профилактики, кто знает какой сюда индекс прилетит)
            if(words[attempts]) {
                viewport.text(words[attempts].answer);
            }
        } else {
            // На этом этапе тест уже завершен, тут я показываю блок "Статистика" и кнопку "Вернуться к выбору уровней" Ну и показываю количество верных и не верных ответов
            if(successAns <= 5) {
                score.find('h4').text('Тобі варто краще вчити англійську') 
            }
            score.find('#wrong span').text(wrongAns);
            score.find('#success span').text(successAns);
            score.fadeIn()
        }
    });

    // После нажатие на эту кнопку, вся процедура начнется сначала  
    $(document).on('click','#reload',function() {
        window.location.reload();
    });
})
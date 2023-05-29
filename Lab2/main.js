class Controller
{
    constructor()
    {
        this.model = new Model();
        this.view = new View(this);
    }

    handleFormSubmit(event)
    {
        event.preventDefault();
        const responses = this.view.getFormResponses();
        this.model.saveResponses(responses);
        const savedResponses = this.model.getResponses();
        this.view.renderResults(savedResponses);
    }
}

class Model
{
    constructor()
    {
        this.responses = {};
    }

    saveResponses(responses)
    {
        this.responses = responses;
    }

    getResponses()
    {
        return this.responses;
    }
}

class View
{
    constructor(controller)
    {
        this.controller = controller;
        this.form = document.getElementById('Form');
        this.resultsElement = document.getElementById('results');
        this.form.addEventListener('submit', this.controller.handleFormSubmit.bind(this.controller));
    }

    getFormResponses()
    {
        const responses = {};
        const radioInputs = this.form.querySelectorAll('input[type="radio"]:checked');

        responses.options1 = radioInputs[0].value;
        responses.options2 = radioInputs[1].value;
        responses.options3 = radioInputs[2].value;
        responses.options4 = radioInputs[3].value;
        responses.options5 = radioInputs[4].value;
        responses.options6 = radioInputs[5].value;
        responses.options7 = radioInputs[6].value;

        return responses;
    }

    renderResults(responses)
    {
        const resultsHTML = `
      <h2><br>Ваші відповіді:</h2>
      <ul>
        <br><li><strong>Питання 1: Чи вважаєте Ви, що в Україні є проблема з сортуванням сміття?</strong> ${responses.options1}</li>
        <br><li><strong>Питання 2: Чи знаєте Ви, які існують види відходів?</strong> ${responses.options2}</li>
        <br><li><strong>Питання 3: Чи сортуєте Ви відходи вдома?</strong> ${responses.options3}</li>
        <br><li><strong>Питання 4: Чи купуєте одноразові пакети у магазині?</strong> ${responses.options4}</li>
        <br><li><strong>Питання 5: Які перешкоди чи труднощі ви зустрічаєте під час сортування сміття у Вашому місті?</strong> ${responses.options5}</li>
        <br><li><strong>Питання 6: Як часто Ви отримуєте інформацію про сортування сміття від місцевих владних органів або організацій?</strong> ${responses.options6}</li>
        <br><li><strong>Питання 7: Чи вважаєте проблему зі сортуванням сміття актуальною?</strong> ${responses.options7}</li>
      </ul>
    `;
        this.resultsElement.innerHTML = resultsHTML;
    }
}

const controller = new Controller();
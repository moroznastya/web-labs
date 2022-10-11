const itemsContainer = document.getElementById("items_container");
const titleInput = document.getElementById("title_input");
const descriptionInput = document.getElementById("description_input");
const cutenessInput = document.getElementById("cuteness_input");

const itemTemplate = ({ id, title, description, cuteness }) => `
<li class="cats__cat-card" id="item-${id}">
    <div class="cats__cat-card-image">
        <img src="../assets/cat.jpg" alt="./images/image_empty.png">
    </div>
    <div class="cats__cat-card-content">
        <div class="cats__cat-card-title">${title}</div>
        <div class="cats__cat-card-description">${description}</div>
        <div class="cats__cat-card-cuteness">
            <div class="cats__cat-card-cuteness-text">Cuteness: </div>
            <div class="cats__cat-card-cuteness-level">${cuteness}%</div>
        </div>
        <div class="cats__cat-card-buttons">
            <button class="cats__cat-card-edit btn-blue" id="editcat_button">Edit</button>
            <button class="cats__cat-card-remove btn-red" id="removecat_button">Remove</button>
        </div>
    </div>
</li>`;

export const addItemToPage = ({ id, title, description, cuteness }) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, title, description, cuteness })
    );
};

export const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item);
    }
};

export const clearInputs = () => {
    titleInput.value = "";
    descriptionInput.value = "";
    cutenessInput.value = "99";
    document.getElementById("cuteness_percentage").innerHTML = `${cutenessInput.value}%`;
};

export const getInputValues = () => {
    return {
        title: titleInput.value,
        description: descriptionInput.value,
        cuteness: cutenessInput.value
    };
};






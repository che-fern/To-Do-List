<script>
    function addItem() {
      const inputField = document.getElementById('itemInput');
      const newItemText = inputField.value.trim();
  
        const listItem = document.createElement('li');
        listItem.textContent = newItemText;

        document.getElementById('itemList').appendChild(listItem);

        inputField.value = "";
</script>
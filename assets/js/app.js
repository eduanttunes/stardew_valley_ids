const handleFilterInput = (type) => {
  if (type !== "name" && type !== "id") return;

  const filterInput = $(`#filter-input-${type}`);
  const tableItems = $('#table-item tbody tr');

  filterInput?.on('input', (event) => {
    const filterValue = event.target.value.toLowerCase();

    tableItems.each(function() {
      const item = $(this).find(`.js-item-${type}`).text().toLowerCase();
      
      if (item.includes(filterValue)) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  })
}

$(document).ready(() => {
  $('table img').Lazy();

  handleFilterInput("name");
  handleFilterInput("id");
});
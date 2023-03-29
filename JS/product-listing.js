
$(document).ready(function() {
    $('#sort-select').on('change', function() {
        let sortBy = $(this).val();
        let products = $('.row .col-md-6.col-lg-4.mb-4');

        products.sort(function(a, b) {
            let aValue = $(a).find('.card-text').text().replace('$', '');
            let bValue = $(b).find('.card-text').text().replace('$', '');
            aValue = parseFloat(aValue);
            bValue = parseFloat(bValue);

            if (sortBy === 'low-to-high') {
                return aValue - bValue;
            } else if (sortBy === 'high-to-low') {
                return bValue - aValue;
            }
        });

        $('.row').html(products);
    });
});

// IN-CLASS TODO: DONE/ Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var articleView = {};


articleView.populateFilters = function() {
  $('article').not('.template').each(function() {
    var authorName, category, optionTag;
    authorName = $(this).find('address a').text();
    optionTag = '<option value="' + authorName + '">' + authorName + '</option>';
    $('#author-filter').append(optionTag);
    category = $(this).attr('data-category');
    optionTag = '<option value="' + category + '">' + category + '</option>';
    if ($('#category-filter option[value="' + category + '"]').length === 0) {
      $('#category-filter').append(optionTag);
    }
  });
};

articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
<<<<<<< HEAD
  //  $('#articles').hide();

      /* TODO: done/ If the slect box changes to an option that has a value, we should:
=======
      /* TODO: If the slect box changes to an option that has a value, we should:
>>>>>>> f52831127f3f8e54a9e7d655c2b20e860347c842
          1. Hide all of the articles
          2. Fade in only the articles that match based on on the author
            that was aselected. Hint: use an attribute selector to find
            those articles that match the value, and then fade them in.
        */
<<<<<<< HEAD
      //  $('#articles [("a").textContent|=$(this).val()]').fadeIn(60);
      $('article').hide();

      var authorName = $(this).val();

      $('[data-attribute = "' + authorName + '"]').fadeIn();
    } else {
    /* Otherwise, we should:
        1. Show all the articles except the template */
      $('#articles').not('.template').show();
=======
      $('article').hide();
      var authorName = $(this).val();
      $('article[data-attribute = "' + authorName + '"]').fadeIn();
    } else {
    /* Otherwise, we should:
        1. Show all the articles except the template */
      $('article').not('.template').show();
>>>>>>> f52831127f3f8e54a9e7d655c2b20e860347c842
    }
    $('#category-filter').val('');
  });
};

<<<<<<< HEAD


=======
>>>>>>> f52831127f3f8e54a9e7d655c2b20e860347c842
articleView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
  /* TODO: done/ Just like we do for #author-filter above, we should also handle
  change events on the #category-filter element. Be sure to reset the
  #author-filter while you're at it! */
<<<<<<< HEAD
    if ($(this).val()) {

      $('article').hide();

      var categoryName = $(this).val();
      $('[data-category = "' + categoryName + '"]').fadeIn();
    } else {
      $('#articles').not('.template').show();
=======
  $('#category-filter').on('change', function(){
    if ($(this).val()) {
      $('article').hide();
      var categoryName = $(this).val();
      $('article[data-category = "' + categoryName + '"]').fadeIn();
    } else {
      $('article').not('.template').show();
>>>>>>> f52831127f3f8e54a9e7d655c2b20e860347c842
    }
    $('#author-filter').val('');
  });
};

    /* TODO: done/
      1. Hide all of the .tab-content sections
      2. Fade in the single .tab-content section that is
        associated with the .tab element's data-content attribute.
        */
articleView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function() {
    $('.main-nav').click(function(event) {
      event.preventDefault();
    });
    $('.tab-content').hide();
  //who called
    var navItem = $(this).attr('data-content');
    $('#' + navItem).fadeIn();

  });
<<<<<<< HEAD
  //I don't know why this is here...
  $('main-nav .tab:first').click();

=======
>>>>>>> f52831127f3f8e54a9e7d655c2b20e860347c842
};

articleView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide();
  /* TODO: done/ Add a delegated event handler to reveal the remaining paragraphs.
    When a .read-on link is clicked, we can:
    1. Prevent the defaul actionof a link.
    2. Reveal everything in that particular article now.
    3. Hide that read-on link!
    // STRETCH GOAl!: change the 'Read On' link to 'Show Less'
  */
  $('.read-on').on('click', function(event) {
    event.preventDefault();
    if ($(this).text() === 'Read on') {
      $(this).parent().find('*').fadeIn();
      $(this).hide();
    };
  });
};

<<<<<<< HEAD
// TODO: done/ Invoke all of the above functions (I mean, methods!):
=======
// TODO: Invoke all of the above functions (I mean, methods!):
articleView.populateFilters();
>>>>>>> f52831127f3f8e54a9e7d655c2b20e860347c842
articleView.handleAuthorFilter();
articleView.handleCategoryFilter();
articleView.handleMainNav();
articleView.setTeasers();

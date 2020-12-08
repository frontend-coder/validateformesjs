// $(document).ready(function(){

$(document).ready(() => {
  $('body').ihavecookies({
    title: '&#x1F36A; Разрещить сайту принимать Cookie?',
    message:
      'На этом сайте не используются файлы cookie, соглашаясь вы предоставите возможность принимать файли куки, или можете их настроить самостоятельно',
    delay: 1600,
    expires: 1,
    link: '/privacy.html',
    onAccept() {
      const myPreferences = $.fn.ihavecookies.cookie();
      console.log('Ура! Следующие настройки были сохранены...');
      console.log(myPreferences);
    },
    uncheckBoxes: true,
    acceptBtnLabel: 'Соглашаюсь',
    moreInfoLabel: 'Больше информации',
    cookieTypesTitle: 'Выберите, файлы куки которые хотите принимать:',
    fixedCookieTypeLabel: 'Основное',
    fixedCookieTypeDesc: 'Это необходимо для правильной работы веб-сайта.',
  });

  if ($.fn.ihavecookies.preference('marketing') === true) {
    console.log('Это должно работать, потому что маркетинг принят.');
  }

  //   $('form').submit(function () {
  //     // Change
  //     const th = $(this);
  //     $.ajax({
  //       type: 'POST',
  //       url: 'mail.php', // Change
  //       data: th.serialize(),
  //     }).done(() => {
  //       $('.form__end').html('Сообщение отправлено');
  //       setTimeout(() => {
  //         // Done Functions
  //         $('.form__end').html('');
  //         th.trigger('reset');
  //       }, 3000);
  //     });
  //     return false;
  //   });
});

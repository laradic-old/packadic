(function(e){function t(e){return" "+e+" символ"+(e%10<5&&e%10>0&&(e%100<5||e%100>20)?e%10>1?"a":"":"ов")}e.fn.select2.locales.ru={formatNoMatches:function(){return"Совпадений не найдено"},formatInputTooShort:function(e,n){return"Пожалуйста, введите еще хотя бы"+t(n-e.length)},formatInputTooLong:function(e,n){return"Пожалуйста, введите на"+t(e.length-n)+" меньше"},formatSelectionTooBig:function(e){return"Вы можете выбрать не более "+e+" элемент"+(e%10==1&&e%100!=11?"а":"ов")},formatLoadMore:function(e){return"Загрузка данных…"},formatSearching:function(){return"Поиск…"}},e.extend(e.fn.select2.defaults,e.fn.select2.locales.ru)})(jQuery);
(function(e){e.fn.select2.locales.fr={formatMatches:function(e){return e+" résultats sont disponibles, utilisez les flèches haut et bas pour naviguer."},formatNoMatches:function(){return"Aucun résultat trouvé"},formatInputTooShort:function(e,t){var n=t-e.length;return"Saisissez "+n+" caractère"+(n==1?"":"s")+" supplémentaire"+(n==1?"":"s")},formatInputTooLong:function(e,t){var n=e.length-t;return"Supprimez "+n+" caractère"+(n==1?"":"s")},formatSelectionTooBig:function(e){return"Vous pouvez seulement sélectionner "+e+" élément"+(e==1?"":"s")},formatLoadMore:function(e){return"Chargement de résultats supplémentaires…"},formatSearching:function(){return"Recherche en cours…"}},e.extend(e.fn.select2.defaults,e.fn.select2.locales.fr)})(jQuery);
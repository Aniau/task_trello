// sort list function and connection sortable list between each other            
			function placeholder(element) {
                    return $("<li class='sortable' id='backgroundColor'</li>");
                }

                $(document).ready(function() {
                    $(".sortable_list").kendoSortable({
                        connectWith: ".connectedSortable",
                        placeholder: placeholder
                    });

                });
				
				 $(document).ready(function() {
                    $(".sortable_list1").kendoSortable({
                        connectWith: ".connectedSortable1",
                        placeholder: placeholder
                    });

                });
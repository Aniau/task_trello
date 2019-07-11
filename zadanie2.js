                function placeholder(element) {
                    return $("<li class='card1' id='backgroundColor'>");
                }

                $(document).ready(function() {
                    $("#sortable-listA").kendoSortable({
                        connectWith: "#sortable-listB",
                        placeholder: placeholder
                    });

                    $("#sortable-listB").kendoSortable({
                        connectWith: "#sortable-listC",
                        placeholder: placeholder
                    });

                    $("#sortable-listC").kendoSortable({
                        connectWith: "#sortable-listA",
                        placeholder: placeholder
                    });
					  $("#sortable-listA").kendoSortable({
                        connectWith: "#sortable-listC",
                        placeholder: placeholder
                    });
					  $("#sortable-listB").kendoSortable({
                        connectWith: "#sortable-listA",
                        placeholder: placeholder
                    });
                });
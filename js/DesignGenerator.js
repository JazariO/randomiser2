 function generateParagraph() {
               //Generate Concept
            var conceptTypeList = ['Life','Chaos','Play','By-Product','Appearance','Memory','Sex','Senses','Time','Nature','Political','Illness','Technology','Identity','Belonging','Childhood','Love','Place','Materiality','History','Future','Science','Religion','Space','Spirituality','Education','Economy','Money','Society','Fantasy','Language','Narrative','Systems','Addition','Death','Mental Health','Emotion','Experience','Sensation','Ephemerality','Culture','Loss','Connection','Food','Expectation','Growth','Lonliness','Certain','Uncertain','Misconception','Dissociation','Denial','Desire','Mysterious'];
            var conceptType = conceptTypeList[Math.floor(Math.random() * conceptTypeList.length)];

            var materialTypeList = ['Food','Plaster','Clay','Sound','Readymade','Wood','Metal','Wire','Fabric','Body','Plastic','Light','Nature','Rubbish','Mirror','String','Liquid','Shadow','Scene','Gas','Hair','Scent','Beads','Paper','Digital','Foam','Fire','Magnet','Language','Found Objects','Clothing','Cardboard','Wax','Bone','Chemicals','Feathers','Paint','Rubber','Ink','Stone','Leaves','Flowers','Electronics','Glass','Silicone','Technology','Paint','Utencils','Clothing','Secondhand','Recycling'];
            var materialType = materialTypeList[Math.floor(Math.random() * materialTypeList.length)];

            var processTypeList = ['Layering','Repurpose','Move','Substitution','Documenting','Smell','Taste','Casting','Reinforce','Embracing','Performing','Reflecting','Heating','Hitting','Returning','Stretching','Shrinking','Embodying','Confirming','Flying','Dissection','Printing','Dancing','Freezing','Hammering','Listing','Binding','Melting','Carving','Etching','Creasing','Folding','Multiplying','Gathering','Seperating','Stretching','Eroding','Erasing','Losing','Scattering','Styling','Mapping','Burning','Collaborating','Seeking','Balancing','Cooking','Stomping','Throwing','Fermenting','Aging','Hiding','Finding'];
            var processType = processTypeList[Math.floor(Math.random() * processTypeList.length)];

                //Set list to default
            var chooseList = ''

            var clientList = [ conceptType +' '+ materialType +' '+ processType +' ', materialType +' '+ conceptType +' '+ processType +' ', materialType +' '+ processType +' '+ conceptType +' ',  processType +' '+ materialType +' '+ conceptType +' ', processType +' '+ conceptType +' '+ materialType +' ', conceptType +' '+ processType +' '+ materialType +' '];
            
                //Grab finished sentence
            var chooseList = clientList[Math.floor(Math.random() * clientList.length)];

			// Insert concatenated sentence to document
            document.getElementById("brief").innerHTML = chooseList ;

        }

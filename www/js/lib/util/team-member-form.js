// TEAM MEMBER form SUBMIT TO OURTEAM
$('.member-permalink').click( function(e) { 
    e.preventDefault(); 

    var selectedMemberLink = $(this),
    selectedInput = $(selectedMemberLink).siblings('input'),
    selectedInput = selectedInput[0];

    // Check the input associated with team member
    $(selectedInput).prop('checked', true);

    // Submit to our team
    $('#myForm').submit();
});
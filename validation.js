function validateUsername(input)
{
	if (input.value.includes(" "))
		input.setCustomValidity("Spaces aren't allowed")
	else
		input.setCustomValidity("Only numbers, letters, underscores, and dashes are allowed")
}

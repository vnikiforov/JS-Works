
class SkippedElement
{
	var Name; // Human orientated string element description.
	var Reason; // Why element skipped.
	var Advice; // Waht user can do for fix.
} 


// Result of compess group
class CompressedSVG
{
	var PathTree;
	var SkippedObjects; // Array of SkippedElement
}


// Main function
// rootGroupTree - <g> - node for compress.
function svg_compress(rootGroupTree)
{
	var resultTree = new CompressedSVG();

	// Process...

	return resultTree;
}


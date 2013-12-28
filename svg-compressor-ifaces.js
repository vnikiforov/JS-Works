

// Main data types

// Collection of group transformation
var TransformCollection; 

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
function svg_compress(rootGroupTree)
{
	var resultTree = new CompressedSVG();

	// 


	return resultTree;
}


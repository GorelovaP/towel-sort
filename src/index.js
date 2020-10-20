
// You should implement your task here.

module.exports = function towelSort (matrix)
{
if (!matrix) 
{return [];}
else
{a=[];
for(var i = 0; i<matrix.length; i ++)
{
if(i%2!==0) {a.push(matrix[i].reverse())}
else if (matrix[i] === []) {return a}
else {a.push(matrix[i])}
}
return a.flat();
}
};

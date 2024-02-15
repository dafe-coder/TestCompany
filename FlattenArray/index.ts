function flattenArray(arr: any[], n: number): any[] {
	let result: any[] = []

	// Функция для рекурсивного обхода массива
	function flattenHelper(subArr: any[], depth: number): void {
		for (let i = 0; i < subArr.length; i++) {
			const element = subArr[i]
			// Если элемент - массив и его глубина меньше n, продолжаем уплощение
			if (Array.isArray(element) && depth < n) {
				flattenHelper(element, depth + 1)
			} else {
				result.push(element) // Добавляем элемент в результат
			}
		}
	}

	flattenHelper(arr, 0) // рекурсивный обход с глубины 0
	return result
}

// Примеры использования
const arr1: any[] = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
const arr2: any[] = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, [9, 10, 11], 12],
	[13, 14, 15],
]

console.log(flattenArray(arr1, 0)) // [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
console.log(flattenArray(arr1, 1)) // [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
console.log(flattenArray(arr2, 2)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

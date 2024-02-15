const airports: string[] = [
	'BGI',
	'CDG',
	'DEL',
	'DOH',
	'DSM',
	'EWR',
	'EYW',
	'HND',
	'ICN',
	'JFK',
	'LGA',
	'LHR',
	'ORD',
	'SAN',
	'SFO',
	'SIN',
	'TLV',
	'BUD',
]

const routes: string[][] = [
	['DSM', 'ORD'],
	['ORD', 'BGI'],
	['BGI', 'LGA'],
	['SIN', 'CDG'],
	['CDG', 'SIN'],
	['CDG', 'BUD'],
	['DEL', 'DOH'],
	['DEL', 'CDG'],
	['TLV', 'DEL'],
	['EWR', 'HND'],
	['HND', 'ICN'],
	['HND', 'JFK'],
	['ICN', 'JFK'],
	['JFK', 'LGA'],
	['EYW', 'LHR'],
	['LHR', 'SFO'],
	['SFO', 'SAN'],
	['SFO', 'DSM'],
	['SAN', 'EYW'],
]

const finishingAirport: string = 'LGA'
const startingAirport: string = 'SAN'

function flying(start: string, end: string): string {
	// Очередь полетов и посещенные аэропорта
	const queue: string[][] = [[start]]
	const visited: Set<string> = new Set(queue[0])

	while (queue.length > 0) {
		const currentRoute = queue.shift()! // Маршрут из очереди

		const currentAirport = currentRoute[currentRoute.length - 1] // Последний аэропорт в очереди

		if (currentAirport === end)
			return `Из ${start} до ${end} количество пересадок - ${currentRoute.length - 1}`

		for (const route of routes) {
			if (route[0] === currentAirport && !visited.has(route[1])) {
				// Новый маршрут в очередь и помечаем аэропорт как посещенный
				queue.push([...currentRoute, route[1]])
				visited.add(route[1])
			}
		}
	}

	return 'Маршрут не найден'
}

console.log(flying(startingAirport, finishingAirport))

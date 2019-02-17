// 1) Para você copiar os dados de um array p/ outro poder utilizar [...array]

export default function() {
    const a = [1, 2, 3]
    const b = [...a]
    const c = a

    return ([
        {'a': a},
        {'b': b },
        {'a === b': a === b },
        {'a === a': a === a },
        {'a === c': a === c }
    ])
}
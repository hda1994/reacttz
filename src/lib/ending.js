export const ending = count => {
    switch (count % 100) {
        case 1:
            return 'изображение'
        case 2:
            return 'изображения'
        case 3:
            return 'изображения'
        case 4:
            return 'изображения'
        default:
            return 'изображений'
    }
}
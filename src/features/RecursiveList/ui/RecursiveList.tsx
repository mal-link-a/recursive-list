import { useState } from "react"
import { getColor } from "../lib/getColor";
import { List, Button, Container, HStack } from "../styledComp";



interface Props {
    nesting: number;
    index: number;
    deleteItem?: (index: number) => void;
}

export const RecursiveList = ({nesting, index, deleteItem}: Props) => {
    const [items, setitems] = useState<string[]>([])

    //Добавляет дочерний в список
    const addItem = () => {
        const newItems = [...items, "Условия задачи не требуют хранить что-либо в элементах списков"];
        setitems(newItems);
    }

    //Самоудаление. Триггерим полученную функцию удаления. У Родительсткого элемента
    const deleteBlock = () => {
        if(deleteItem)
        deleteItem(index);
    }

    //Удаление ребёнка. Передаём пропсами дочернему
    const deleteChild = (index: number) => { 
        if (index === 0) {
            console.log(1);
            setitems(items.slice(1));
            return;
        }
        if (index === items.length -1) {
            console.log(2);
            setitems(items.slice(0, index));
            return;
        }
        console.log(3);
        const newItems = [...items.slice(0, index-1), ...items.slice(index)];
        setitems(newItems);
    }

    return (
        <Container>
            <p>Вложенность {nesting}, индекс {index}</p>
            <HStack>
            <Button onClick={addItem}>Добавить дочерний</Button>
            <Button $hide = {!deleteItem} onClick={deleteBlock}>Удалить этот</Button>
            </HStack>            
            <List $isHollow = {!items.length} $color={getColor(nesting)}>
                {items.map((item, i)=> <RecursiveList nesting={nesting + 1} index={i} deleteItem={deleteChild} />)}
            </List>            
        </Container>
    )
}

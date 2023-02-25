import { Card, CardContent, Typography } from "@mui/material";

export default function(props){
    return (
        <Card>
            <CardContent>
                <Typography color="text.secondary">{props.carte.liste}</Typography><br/>
                <Typography variant="body2">{props.carte.content}</Typography><br/>
                <Typography color="text.secondary">{props.liste.title}</Typography>
            </CardContent>
        </Card>
    )
}
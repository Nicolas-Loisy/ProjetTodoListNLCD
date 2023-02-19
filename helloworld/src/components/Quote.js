import { Card, CardContent, Typography } from "@mui/material";

export default function(props){
    return (
        <Card>
            <CardContent>
                <Typography color="text.secondary">{props.quote.actor}</Typography><br/>
                <Typography variant="body2">{props.quote.content}</Typography><br/>
                <Typography color="text.secondary">{props.author.name}</Typography>
            </CardContent>
        </Card>
    )
}
import { Component, OnInit } from '@angular/core';
import { Note } from "@core/data/note";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    readonly notes: Note[] = [
        {
            title: "Note 1 dsagndhgasjkldhasjkldhasldkjhac",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed sem nec eros finibus fringilla. Proin sed justo ut elit tincidunt varius. Nullam id urna nec justo vehicula semper. Sed varius risus a purus aliquam, in ultricies odio viverra. Nullam in sapien eu ante viverra vulputate ac eget lectus.",
            noteId: 0
        },
        {
            title: "Note 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed sem nec eros finibus fringilla. Proin sed justo ut elit tincidunt varius. Nullam id urna nec justo vehicula semper. Sed varius risus a purus aliquam, in ultricies odio viverra. Nullam in sapien eu ante viverra vulputate ac eget lectus.",
            noteId: 1
        },
        {
            title: "Note 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed sem nec eros finibus fringilla. Proin sed justo ut elit tincidunt varius. Nullam id urna nec justo vehicula semper. Sed varius risus a purus aliquam, in ultricies odio viverra. Nullam in sapien eu ante viverra vulputate ac eget lectus.",
            noteId: 2,
        },
        {
            title: "Note 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed sem nec eros finibus fringilla. Proin sed justo ut elit tincidunt varius. Nullam id urna nec justo vehicula semper. Sed varius risus a purus aliquam, in ultricies odio viverra. Nullam in sapien eu ante viverra vulputate ac eget lectus.",
            noteId: 3
        },
        {
            title: "Note 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed sem nec eros finibus fringilla. Proin sed justo ut elit tincidunt varius. Nullam id urna nec justo vehicula semper. Sed varius risus a purus aliquam, in ultricies odio viverra. Nullam in sapien eu ante viverra vulputate ac eget lectus.",
            noteId: 4
        },
        {
            title: "Note 6",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed sem nec eros finibus fringilla. Proin sed justo ut elit tincidunt varius. Nullam id urna nec justo vehicula semper. Sed varius risus a purus aliquam, in ultricies odio viverra. Nullam in sapien eu ante viverra vulputate ac eget lectus.",
            noteId: 5
        },
        {
            title: "Note 7",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed sem nec eros finibus fringilla. Proin sed justo ut elit tincidunt varius. Nullam id urna nec justo vehicula semper. Sed varius risus a purus aliquam, in ultricies odio viverra. Nullam in sapien eu ante viverra vulputate ac eget lectus.",
            noteId: 6
        },
        {
            title: "Note 8",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed sem nec eros finibus fringilla. Proin sed justo ut elit tincidunt varius. Nullam id urna nec justo vehicula semper. Sed varius risus a purus aliquam, in ultricies odio viverra. Nullam in sapien eu ante viverra vulputate ac eget lectus.",
            noteId: 7
        },
        {
            title: "Note 9",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed sem nec eros finibus fringilla. Proin sed justo ut elit tincidunt varius. Nullam id urna nec justo vehicula semper. Sed varius risus a purus aliquam, in ultricies odio viverra. Nullam in sapien eu ante viverra vulputate ac eget lectus.",
            noteId: 8
        },
        {
            title: "Note 10",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed sem nec eros finibus fringilla. Proin sed justo ut elit tincidunt varius. Nullam id urna nec justo vehicula semper. Sed varius risus a purus aliquam, in ultricies odio viverra. Nullam in sapien eu ante viverra vulputate ac eget lectus.",
            noteId: 9
        },
        {
            title: "Note 11",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed sem nec eros finibus fringilla. Proin sed justo ut elit tincidunt varius. Nullam id urna nec justo vehicula semper. Sed varius risus a purus aliquam, in ultricies odio viverra. Nullam in sapien eu ante viverra vulputate ac eget lectus.",
            noteId: 10
        },
        {
            title: "Note 12",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed sem nec eros finibus fringilla. Proin sed justo ut elit tincidunt varius. Nullam id urna nec justo vehicula semper. Sed varius risus a purus aliquam, in ultricies odio viverra. Nullam in sapien eu ante viverra vulputate ac eget lectus.",
            noteId: 11
        },
        {
            title: "Note 13",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed sem nec eros finibus fringilla. Proin sed justo ut elit tincidunt varius. Nullam id urna nec justo vehicula semper. Sed varius risus a purus aliquam, in ultricies odio viverra. Nullam in sapien eu ante viverra vulputate ac eget lectus.",
            noteId: 12
        },
        {
            title: "Note 14",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed sem nec eros finibus fringilla. Proin sed justo ut elit tincidunt varius. Nullam id urna nec justo vehicula semper. Sed varius risus a purus aliquam, in ultricies odio viverra. Nullam in sapien eu ante viverra vulputate ac eget lectus.",
            noteId: 13
        },
        {
            title: "Note 15",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed sem nec eros finibus fringilla. Proin sed justo ut elit tincidunt varius. Nullam id urna nec justo vehicula semper. Sed varius risus a purus aliquam, in ultricies odio viverra. Nullam in sapien eu ante viverra vulputate ac eget lectus.",
            noteId: 14
        },
        {
            title: "Note 16",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed sem nec eros finibus fringilla. Proin sed justo ut elit tincidunt varius. Nullam id urna nec justo vehicula semper. Sed varius risus a purus aliquam, in ultricies odio viverra. Nullam in sapien eu ante viverra vulputate ac eget lectus.",
            noteId: 15
        }
    ];

    ngOnInit(): void {
    }
}

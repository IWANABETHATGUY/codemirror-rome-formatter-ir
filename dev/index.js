import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { basicSetup } from "codemirror";
import { parser, romeAst } from "../dist";
// import { oneDark } from '@codemirror/theme-one-dark';

const doc = `
[
  "function",
  " ",
  "test",
  group(["(", ")"]),
  " ",
  "{",
  indent(element, [
    hard_line_break,
    "let",
    " ",
    group([
      group([
        group(["render"]),
        " ",
        "=",
        group([indent([soft_line_break_or_space])], { id: #1 }),
        line_suffix_boundary,
        if_group_breaks(
          [
            indent([
              <interned 0> [
                " ",
                "fjewiojiewajijfjfewaijjfjewaiiijjjjjjjjjjjjjjjjjjjjjjjfaweijjjfjwaieeeeeeeeeeeeeefjeawofjaweoooooooooooofejwiaaaaaaaaaaafejawiiiiiii"
              ]
            ])
          ],
          { id: #1 }
        ),
        if_group_fits_on_line([<ref interned *0>], { id: #1 })
      ])
    ]),
    ";",
    hard_line_break,
    "something",
    ";",
    hard_line_break,
    "fdjajiewj",
    ";",
    hard_line_break,
    "fjeaiojefaw",
    ";",
    hard_line_break,
    "feajifjawo",
    ";",
    hard_line_break,
    "feaiwjfiowa",
    ";"
  ]),
  hard_line_break,
  "}",
  hard_line_break
]
`;

new EditorView({
	state: EditorState.create({
		doc,
		extensions: [basicSetup, romeAst(), EditorView.lineWrapping],
	}),
	parent: document.querySelector("#editor"),
});
